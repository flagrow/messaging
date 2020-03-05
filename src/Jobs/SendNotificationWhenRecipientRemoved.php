<?php

/*
 * This file is part of fof/byobu.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Byobu\Jobs;

use Flarum\Discussion\Discussion;
use Flarum\Notification\NotificationSyncer;
use Flarum\User\User;
use FoF\Byobu\Notifications\DiscussionRecipientRemovedBlueprint;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class SendNotificationWhenRecipientRemoved implements ShouldQueue
{
    use Queueable;
    use SerializesModels;

    /**
     * @var User
     */
    protected $actor;

    /**
     * @var Discussion
     */
    protected $discussion;

    /**
     * @var Collection
     */
    protected $newUsers;

    public function __construct(
        User $actor,
        Discussion $discussion,
        Collection $newUsers
    ) {
        $this->actor = $actor;
        $this->discussion = $discussion;
        $this->newUsers = $newUsers;
    }

    public function handle(NotificationSyncer $notifications)
    {
        $recipients = User::whereIn('id', $this->newUsers)->get();

        $notifications->sync(new DiscussionRecipientRemovedBlueprint($this->actor, $this->discussion), $recipients->all());
    }
}
